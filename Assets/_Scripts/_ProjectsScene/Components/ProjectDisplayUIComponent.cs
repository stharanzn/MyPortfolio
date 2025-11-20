using System;
using Common;
using Portfolio.Model;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Video;

namespace Portfolio.Projects.Components
{
    public class ProjectDisplayUIComponent : MonoBehaviour
    {
        #region Inspector Variables
        [SerializeField] private VideoPlayer videoPlayer;
        [SerializeField] private TMP_Text projectNameText;
        [SerializeField] private Image loadingImage;
        // [SerializeField] private TMP_Text ;
        #endregion Inspector Variables

        #region Public Variables
        #endregion Public Variables

        #region Private Variables
        #endregion Private Variables

        #region Monobehaviour Methods
        #endregion Monobehaviour Methods

        #region Private Methods
        // private void OnVideoPlayerStarted(VideoPlayer source)
        // {
        //     loadingImage.gameObject.SetActive(false);
        // }
        #endregion Private Methods

        #region Public Methods
        public void SetProjectDetails(ProjectDisplayData projectDisplayData)
        {
            projectNameText.text = projectDisplayData.ProjectName;
            videoPlayer.url = projectDisplayData.ProjectVideoUrl;
            loadingImage.gameObject.SetActive(true);
            videoPlayer.Prepare();
            // videoPlayer.started += OnVideoPlayerStarted;
        }



        public void OnOpened()
        {
            videoPlayer.time = 0;
            loadingImage.gameObject.SetActive(false);
            videoPlayer.Play();
        }

        public void OnClosed()
        {
            videoPlayer.Stop();
            // videoPlayer.started -= OnVideoPlayerStarted;
        }

        #endregion Public Methods
    }
}
