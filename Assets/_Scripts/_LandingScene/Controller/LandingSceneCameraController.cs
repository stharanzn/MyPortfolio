using Common;
using DG.Tweening;
using Portfolio.InputActions;
using Portfolio.LandingScene.Model;
using UnityEngine;

namespace Portfolio.LandingScene.Controller
{
    public class LandingSceneCameraController : EntityController
    {
        #region Inspector Variables
        [SerializeField] private Camera primaryCamera;
        [SerializeField] private Transform initialPosition;
        [SerializeField] private Transform cameraHolder;
        [SerializeField] private LandingScenePanCameraSettings panCameraSettings;
        [SerializeField] private LandingSceneZoomCameraSettings zoomCameraSettings;
        [SerializeField] private Transform defaultLookAtTransform;
        [SerializeField] private float finalCameraHolderYRotation = -150;
        #endregion Inspector Variables

        #region Public Variables
        #endregion Public Variables

        #region Private Variables
        private Vector3 _requestedCameraPosition;
        private Vector3 _requestedCameraZoomPosition;
        private CameraInputActions _cameraInputActions;
        private Transform _lookAtTransform;
        private Vector3 intendedZoomTransform;
        private CameraState cameraState;
        #endregion Private Variables

        #region Monobehaviour Methods
        private void OnDrawGizmos()
        {
            if (_lookAtTransform != null)
            {
                Gizmos.DrawWireSphere(_lookAtTransform.position, 0.5f);
            }
            Gizmos.color = Color.green;
            Gizmos.DrawWireSphere(_requestedCameraZoomPosition, 0.6f);
        }

        private void LateUpdate()
        {
            LerpCameraPosition();
        }
        #endregion Monobehaviour Methods

        #region Private Methods

        private void LerpCameraPosition()
        {
            if (cameraState != CameraState.ACTIVE) return;
            float panT = Time.deltaTime * panCameraSettings.PanLerp;
            float zoomT = Time.deltaTime * zoomCameraSettings.ZoomSmoothness;

            cameraHolder.transform.position = Vector3.Lerp(cameraHolder.transform.position, _requestedCameraPosition, panT);
            primaryCamera.transform.localPosition = Vector3.Lerp(primaryCamera.transform.localPosition, _requestedCameraZoomPosition, zoomT);
        }

        private void CheckCameraInput()
        {
            if (cameraState != CameraState.ACTIVE) return;

            Projects.Models.CameraInput _cameraInput = new();

            if (_cameraInputActions.Camera.PointerDown.IsPressed())
            {
                _cameraInput.Pan = _cameraInputActions.Camera.Pan.ReadValue<Vector2>();
            }

            _cameraInput.Zoom = _cameraInputActions.Camera.Zoom.ReadValue<float>();

            PanCamera(_cameraInput);
            ZoomCamera(_cameraInput);

        }

        private void PanCamera(Projects.Models.CameraInput cameraInput)
        {
            Vector2 screenDelta = cameraInput.Pan;

            screenDelta = Vector3.ClampMagnitude(screenDelta, panCameraSettings.MaxPanSwipeMagnitude);
            Vector3 worldMovement = new Vector3(-screenDelta.x, -screenDelta.y, 0);

            worldMovement *= panCameraSettings.PanSpeed * panCameraSettings.PanDepth * Time.deltaTime;

            _requestedCameraPosition += Quaternion.Euler(primaryCamera.transform.eulerAngles) * worldMovement;
        }

        private void ZoomCamera(Projects.Models.CameraInput cameraInput)
        {
            float scrollDelta = cameraInput.Zoom / 100f;

            if (scrollDelta == 0)
            {
                return;
            }

            float moveAmount = scrollDelta * zoomCameraSettings.ZoomSpeed;

            Vector3 intendedTargetPosition = _requestedCameraZoomPosition + (primaryCamera.transform.localPosition + primaryCamera.transform.forward) * -moveAmount;
            intendedZoomTransform = intendedTargetPosition;
            Vector3 directionFromLookAt = intendedTargetPosition - _lookAtTransform.position;
            float currentDistance = directionFromLookAt.magnitude;

            float clampedDistance = Mathf.Clamp(currentDistance, zoomCameraSettings.MinZoom, zoomCameraSettings.MaxZoom);

            if (currentDistance <= zoomCameraSettings.MaxZoom && currentDistance >= zoomCameraSettings.MinZoom)
            {
                _requestedCameraZoomPosition = _lookAtTransform.position + directionFromLookAt.normalized * clampedDistance;
            }

        }

        private void StartInitialLoadingSequence()
        {
            SetCameraState(CameraState.TRANSITION);
            cameraHolder.DORotate(new Vector3(cameraHolder.rotation.x, finalCameraHolderYRotation, cameraHolder.rotation.z), GetGameController<LandingSceneGameController>().InitialLoadingSequenceDuration);
            primaryCamera.transform.DOLocalMove(initialPosition.transform.position, GetGameController<LandingSceneGameController>().InitialLoadingSequenceDuration).OnComplete(OnInitialCameraTransitionComplete);
        }

        private void OnInitialCameraTransitionComplete()
        {
            _requestedCameraZoomPosition = primaryCamera.transform.localPosition;
            GetGameController<LandingSceneGameController>().OnInitialAnimationComplete();
        }

        private void SetCameraState(CameraState state)
        {
            cameraState = state;
        }

        #endregion Private Methods

        #region Public Methods
        public override void OnGameStart()
        {
            SetCameraState(CameraState.INACTIVE);
            view.SetController(this);
            view.OnGameStart();

            _cameraInputActions = new();

            SetLookAtTarget(defaultLookAtTransform);
            StartInitialLoadingSequence();
        }

        public override void OnGameOver()
        {

        }

        public void SetLookAtTarget(Transform transform)
        {
            _lookAtTransform = transform;
        }

        public void SetCameraControlState(bool state)
        {
            if (state)
            {
                _cameraInputActions.Camera.Enable();
                cameraState = CameraState.ACTIVE;
            }
            else
            {
                _cameraInputActions.Camera.Disable();
                cameraState = CameraState.INACTIVE;
            }
        }

        public void OnGameUpdate()
        {
            CheckCameraInput();
        }
        #endregion Public Methods
    }
}
