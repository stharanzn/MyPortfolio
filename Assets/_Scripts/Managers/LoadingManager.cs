using System.Collections;
using UIUtility.Components;
using UIUtility.Utils;
using UnityEngine;
using UnityEngine.UI;
using Utils;

namespace Common
{
    public class LoadingManager : SingletonUtility<LoadingManager>
    {
        #region Inspector Variables
        // [SerializeField] private Canvas loadingCanvas;
        [SerializeField] private Image loadingBarFill;
        [SerializeField] private UICanvasComponent loadingCanvas;
        #endregion Inspector Variables

        #region Public Variables
        #endregion Public Variables

        #region Private Variables
        private bool isSceneLoading = false;
        #endregion Private Variables

        #region Monobehaviour Methods
        public override void Awake()
        {
            base.Awake();

            loadingCanvas.OnGameStart();
            DontDestroyOnLoad(gameObject);
        }
        #endregion Monobehaviour Methods

        #region Private Methods
        private IEnumerator LoadSceneCoroutine(Scene scene)
        {
            isSceneLoading = true;
            loadingCanvas.OnSceneChange();
            yield return new WaitForSeconds(0.5f);
            AsyncOperation op = scene.LoadSceneAsync();

            loadingBarFill.fillAmount = 0f;
            // loadingCanvas.gameObject.SetActive(true);

            while (!op.isDone)
            {
                loadingBarFill.fillAmount = op.progress / 0.9f;
                yield return null;
            }

            // loadingCanvas.gameObject.SetActive(false);
        }
        #endregion Private Methods

        #region Public Methods        

        internal void LoadScene(Scene scene)
        {
            StartCoroutine(LoadSceneCoroutine(scene));
        }
        #endregion Public Methods
    }
}
