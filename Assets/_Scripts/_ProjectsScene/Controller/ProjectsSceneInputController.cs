using System;
using Common;
using Portfolio.InputActions;
using Portfolio.Projects.Components;
using Portfolio.Projects.Controllers;
using Portfolio.Projects.Models;
using UnityEngine;
using UnityEngine.InputSystem;

namespace Portfolio
{
    public class ProjectsSceneInputController : EntityController
    {
        #region Inspector Variables
        #endregion Inspector Variables

        #region Public Variables
        #endregion Public Variables

        #region Private Variables
        private CameraInputActions _cameraInputActions;
        private bool _checkForPointerPress;
        #endregion Private Variables

        #region Monobehaviour Methods
        #endregion Monobehaviour Methods

        #region Private Methods

        private void CheckCameraInput()
        {
            CameraInput _cameraInput = new();
            if (_cameraInputActions.Camera.PointerDown.IsPressed())
            {
                _cameraInput.Pan = _cameraInputActions.Camera.Pan.ReadValue<Vector2>();
            }

            _cameraInput.Zoom = _cameraInputActions.Camera.Zoom.ReadValue<float>();

            GetGameController<ProjectsSceneGameController>().OnCameraInput(_cameraInput);
        }

        private void OnPointerPress(InputAction.CallbackContext callbackContext)
        {
            _checkForPointerPress = true;
        }

        private void OnPointerUp(InputAction.CallbackContext callbackContext)
        {
            if (_checkForPointerPress)
            {
                Ray ray = Camera.main.ScreenPointToRay(_cameraInputActions.Camera.PointerPosition.ReadValue<Vector2>());
                if (Physics.Raycast(ray, out RaycastHit hit))
                {
                    hit.collider.gameObject.TryGetComponent(out ProjectCliffComponent projectCliffComponent);
                    if (projectCliffComponent != null)
                    {
                        GetGameController<ProjectsSceneGameController>().OnProjectCliffSelected(projectCliffComponent);
                    }
                }
                else
                {
                    GetGameController<ProjectsSceneGameController>().OnProjectCliffDeselected();
                }
            }
            else
            {
                GetGameController<ProjectsSceneGameController>().OnProjectCliffDeselected();
            }
        }

        #endregion Private Methods

        #region Public Methods
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

        public void OnGameUpdate()
        {
            if (_cameraInputActions.Camera.PointerDown.IsInProgress())
            {
                if (_cameraInputActions.Camera.Pan.ReadValue<Vector2>().magnitude > 1)
                {
                    _checkForPointerPress = false;
                }
            }

            CheckCameraInput();
        }

        public override void OnGameStart()
        {
            _cameraInputActions = new CameraInputActions();
            _cameraInputActions.Camera.PointerDown.started += OnPointerPress;
            _cameraInputActions.Camera.PointerDown.canceled += OnPointerUp;
        }

        public override void OnGameOver()
        {

        }
        #endregion Public Methods
    }
}
