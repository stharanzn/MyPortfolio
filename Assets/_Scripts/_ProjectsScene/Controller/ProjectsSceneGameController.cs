using Common;
using Portfolio.Projects.Components;
using Portfolio.Projects.Models;
using Portfolio.Projects.Views;
using UnityEngine;

namespace Portfolio.Projects.Controllers
{
    public class ProjectsSceneGameController : EntityController
    {
        #region Inspector Variables
        [SerializeField] private ProjectsSceneCameraController cameraController;
        [SerializeField] private ProjectsCliffController projectsCliffController;
        [SerializeField] private ProjectsSceneInputController projectsSceneInputController;
        #endregion Inspector Variables

        #region Public Variables
        #endregion Public Variables

        #region Private Variables
        private ProjectCliffComponent _selectedProjectCliff;
        #endregion Private Variables

        #region Monobehaviour Methods
        private void Start()
        {
            OnGameStart();
        }

        private void Update()
        {
            projectsSceneInputController.OnGameUpdate();
        }
        #endregion Monobehaviour Methods

        #region Private Methods
        #endregion Private Methods

        #region Public Methods

        public void OnProjectCliffSelected(ProjectCliffComponent projectCliffComponent)
        {
            if (_selectedProjectCliff != null && _selectedProjectCliff != projectCliffComponent)
            {
                _selectedProjectCliff.OnCliffDeselected();
            }
            _selectedProjectCliff = projectCliffComponent;
            _selectedProjectCliff.OnCliffSelected();
            GetView<ProjectsSceneGameView>().OnProjectCliffSelected(_selectedProjectCliff);
            cameraController.SetCameraTarget(_selectedProjectCliff.CameraTargetOnFocus.position);
        }

        public void OnProjectCliffDeselected()
        {
            if (_selectedProjectCliff != null)
            {
                _selectedProjectCliff.OnCliffDeselected();
                _selectedProjectCliff = null;
            }
        }

        public void OnCameraInput(CameraInput cameraInput)
        {
            cameraController.OnCameraInput(cameraInput);
        }

        public override void OnGameStart()
        {
            view.SetController(this);
            view.OnGameStart();

            projectsSceneInputController.SetHubController(this);
            projectsSceneInputController.OnGameStart();

            cameraController.SetHubController(this);
            cameraController.OnGameStart();

            projectsCliffController.SetHubController(this);
            projectsCliffController.OnGameStart();

            projectsSceneInputController.SetCameraControlsState(true);
        }

        public override void OnGameOver()
        {

        }
        #endregion Public Methods
    }
}
