using Common;
using UnityEngine;

namespace Portfolio.Projects.Controllers
{
    public class ProjectsSceneGameController : EntityController
    {
        #region Inspector Variables
        [SerializeField] private ProjectsSceneCameraController cameraController;
        #endregion Inspector Variables

        #region Public Variables
        #endregion Public Variables

        #region Private Variables
        #endregion Private Variables

        #region Monobehaviour Methods
        private void Start()
        {
            OnGameStart();
        }

        private void Update()
        {
            cameraController.OnGameUpdate();
        }
        #endregion Monobehaviour Methods

        #region Private Methods
        #endregion Private Methods

        #region Public Methods
        public override void OnGameStart()
        {
            view.SetController(this);
            view.OnGameStart();

            cameraController.SetHubController(this);
            cameraController.OnGameStart();

            cameraController.SetCameraControlsState(true);
        }

        public override void OnGameOver()
        {

        }
        #endregion Public Methods
    }
}
