using Common;
using UnityEngine;

namespace Portfolio.LandingScene.Controller
{
    public class LandingSceneGameController : EntityController
    {
        #region Inspector Variables
        [SerializeField] private LandingSceneCameraController cameraController;
        #endregion Inspector Variables

        #region Public Variables
        public float InitialLoadingSequenceDuration = 2.5f;
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
            OnGameUpdate();
        }
        #endregion Monobehaviour Methods

        #region Private Methods
        #endregion Private Methods

        #region Public Methods

        public void OnInitialAnimationComplete()
        {
            cameraController.SetCameraControlState(true);
        }

        public override void OnGameStart()
        {
            Application.targetFrameRate = 60;
            view.SetController(this);
            view.OnGameStart();

            cameraController.SetHubController(this);
            cameraController.OnGameStart();
        }

        public override void OnGameOver()
        {

        }

        public void OnGameUpdate()
        {
            cameraController.OnGameUpdate();
        }
        #endregion Public Methods
    }
}
