using Common;
using Portfolio.Projects.Components;
using UIUtility.Components;
using UIUtility.Utils;
using UnityEngine;
using UnityEngine.UI;

namespace Portfolio.Projects.Views
{
    public class ProjectsSceneGameView : EntityView
    {
        #region Inspector Variables
        [SerializeField] private UICanvasComponent projectDataDisplayCanvas;
        [SerializeField] private ProjectDisplayUIComponent projectDisplayUIComponent;
        [SerializeField] private Button closeProjectDisplayCanvasBtn;
        #endregion Inspector Variables

        #region Public Variables
        #endregion Public Variables

        #region Private Variables
        #endregion Private Variables

        #region Monobehaviour Methods
        #endregion Monobehaviour Methods

        #region Private Methods
        private void AddListeners()
        {
            closeProjectDisplayCanvasBtn.onClick.AddListener(OnCloseProjectDisplayCanvasBtnClicked);
        }

        private void OnCloseProjectDisplayCanvasBtnClicked()
        {
            projectDataDisplayCanvas.CloseCanvas();
        }
        #endregion Private Methods

        #region Public Methods

        public void OnProjectCliffSelected(ProjectCliffComponent projectCliffComponent)
        {
            projectDataDisplayCanvas.OpenCanvas();
            projectDisplayUIComponent.SetProjectDetails(projectCliffComponent.ProjectDisplayData);
        }

        public void OnProjectCliffClose()
        {
            projectDataDisplayCanvas.OnClose();
        }

        public override void OnGameStart()
        {
            AddListeners();
            projectDataDisplayCanvas.OnGameStart();
        }

        public override void OnGameOver()
        {

        }
        #endregion Public Methods
    }
}
