using Common;
using Portfolio.Model;
using TMPro;
using UnityEngine;
using UnityEngine.Video;

namespace Portfolio.Projects.Components
{
    public class ProjectDisplayUIComponent : MonoBehaviour
    {
        #region Inspector Variables
        [SerializeField] private VideoPlayer videoPlayer;
        [SerializeField] private TMP_Text projectNameText;
        // [SerializeField] private TMP_Text ;
        #endregion Inspector Variables

        #region Public Variables
        #endregion Public Variables

        #region Private Variables
        #endregion Private Variables

        #region Monobehaviour Methods
        #endregion Monobehaviour Methods

        #region Private Methods
        #endregion Private Methods

        #region Public Methods
        public void SetProjectDetails(ProjectDisplayData projectDisplayData)
        {
            projectNameText.text = projectDisplayData.ProjectName;
            videoPlayer.url = projectDisplayData.ProjectVideoUrl;
        }
        #endregion Public Methods
    }
}
