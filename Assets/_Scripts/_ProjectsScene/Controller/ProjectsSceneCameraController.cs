using Common;
using Portfolio.InputActions;
using Portfolio.Projects.Models;
using UnityEngine;

namespace Portfolio.Projects.Controllers
{
    public class ProjectsSceneCameraController : EntityController
    {
        #region Inspector Variables
        [SerializeField] private Camera primaryCamera;
        [SerializeField] private Transform cameraHolder;
        [SerializeField] private CameraPanSettings cameraPanSettings;
        [SerializeField] private CameraZoomSettings cameraZoomSettings;
        #endregion Inspector Variables

        #region Public Variables
        #endregion Public Variables

        #region Private Variables
        private Vector3 _requestedPosition;
        private float _requestedZoom;
        private CameraInputActions _cameraInputActions;
        private float _currentZoom;
        #endregion Private Variables

        #region Monobehaviour Methods
        private void LateUpdate()
        {
            LerpCameraPosition();
        }
        #endregion Monobehaviour Methods

        #region Private Methods

        private void LerpCameraPosition()
        {
            float panLerpT = Time.deltaTime * cameraPanSettings.PanLerp;
            float zoomLerpT = Time.deltaTime * cameraZoomSettings.ZoomSmoothness;

            cameraHolder.transform.position = Vector3.Lerp(cameraHolder.transform.position, _requestedPosition, panLerpT);
            primaryCamera.orthographicSize = Mathf.Lerp(primaryCamera.orthographicSize, _requestedZoom, zoomLerpT);
        }

        private void CheckCameraInput()
        {
            CameraInput _cameraInput = new();
            if (_cameraInputActions.Camera.PointerDown.IsPressed())
            {
                _cameraInput.Pan = _cameraInputActions.Camera.Pan.ReadValue<Vector2>();
            }

            _cameraInput.Zoom = _cameraInputActions.Camera.Zoom.ReadValue<float>();

            PanCamera(_cameraInput);
            ZoomCamera(_cameraInput);
        }

        private void ZoomCamera(CameraInput cameraInput)
        {
            float scrollDelta = cameraInput.Zoom / 100f;

            _requestedZoom -= scrollDelta * cameraZoomSettings.ZoomSpeed;

            _requestedZoom = Mathf.Clamp(_requestedZoom, cameraZoomSettings.MinZoom, cameraZoomSettings.MaxZoom);
        }

        private void PanCamera(CameraInput cameraInput)
        {
            Vector2 screenDelta = cameraInput.Pan;

            screenDelta = Vector3.ClampMagnitude(screenDelta, cameraPanSettings.MaxPanSwipeMagnitude);

            Vector3 worldMovement = new Vector3(-screenDelta.x, 0, -screenDelta.y);

            worldMovement *= cameraPanSettings.PanSpeed * cameraPanSettings.PanDepth * Time.deltaTime;

            _requestedPosition += Quaternion.Euler(0, primaryCamera.transform.eulerAngles.y, 0) * worldMovement;
        }
        #endregion Private Methods

        #region Public Methods
        public override void OnGameStart()
        {
            primaryCamera.orthographicSize = cameraZoomSettings.MaxZoom;
            _cameraInputActions = new CameraInputActions();
            _requestedZoom = cameraZoomSettings.defaultZoom;
        }

        public override void OnGameOver()
        {

        }

        public void OnGameUpdate()
        {
            CheckCameraInput();
        }

        public void SetCameraControlsState(bool state)
        {
            if (state)
            {
                _cameraInputActions.Enable();
            }
            else
            {
                _cameraInputActions.Disable();
            }
        }
        #endregion Public Methods
    }
}
