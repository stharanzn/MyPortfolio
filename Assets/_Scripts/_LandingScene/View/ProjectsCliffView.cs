using Common;
using UnityEngine;
using Utils;

namespace Portfolio.Projects.Views
{
    public class ProjectsCliffView : ObjectPoolView
    {
        #region Inspector Variables
        [SerializeField] private Transform projectsCliffHolderTransform;
        #endregion Inspector Variables

        #region Public Variables
        #endregion Public Variables

        #region Private Variables
        #endregion Private Variables

        #region Private Methods
        #endregion Private Methods

        #region Public Methods
        public override void OnGameStart()
        {
            SetupPool(10);
        }

        public override void OnGameOver()
        {

        }
        #endregion Public Methods
    }
}
