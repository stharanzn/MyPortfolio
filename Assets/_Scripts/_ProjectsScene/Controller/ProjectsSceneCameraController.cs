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



        private void ZoomCamera(float zoom)
        {
            float scrollDelta = zoom / 100f;

            _requestedZoom -= scrollDelta * cameraZoomSettings.ZoomSpeed;

            _requestedZoom = Mathf.Clamp(_requestedZoom, cameraZoomSettings.MinZoom, cameraZoomSettings.MaxZoom);
        }

        private void PanCamera(Vector2 pan)
        {
            Vector2 screenDelta = pan;

            screenDelta = Vector3.ClampMagnitude(screenDelta, cameraPanSettings.MaxPanSwipeMagnitude);

            Vector3 worldMovement = new Vector3(-screenDelta.x, 0, -screenDelta.y);

            worldMovement *= cameraPanSettings.PanSpeed * cameraPanSettings.PanDepth * Time.deltaTime;

            _requestedPosition += Quaternion.Euler(0, primaryCamera.transform.eulerAngles.y, 0) * worldMovement;
        }
        #endregion Private Methods

        #region Public Methods

        public void SetCameraTarget(Vector3 position)
        {
            _requestedPosition = new Vector3(position.x, _requestedPosition.y, position.z);
        }

        public void OnCameraInput(CameraInput cameraInput)
        {
            PanCamera(cameraInput.Pan);
            ZoomCamera(cameraInput.Zoom);
        }

        public override void OnGameStart()
        {
            primaryCamera.orthographicSize = cameraZoomSettings.MaxZoom;
            _requestedZoom = cameraZoomSettings.defaultZoom;
        }

        public override void OnGameOver()
        {

        }


        #endregion Public Methods
    }
}
