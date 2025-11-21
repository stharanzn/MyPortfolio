using UIUtility.Components;
using UIUtility.Utils;
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.UI;

namespace UIUtility.Test
{
    public class TestFlow : MonoBehaviour
    {
        #region Inspector Variables
        [SerializeField] private UICanvasComponent menuCanvas;
        [SerializeField] private UICanvasComponent instructionCanvas;
        [SerializeField] private UICanvasComponent gameplayCanvas;
        [SerializeField] private UICanvasComponent pauseCanvas;
        [SerializeField] private UICanvasComponent gameoverCanvas;
        [SerializeField] private Button playBtn;
        [SerializeField] private Button instructionContinueBtn;
        [SerializeField] private Button pauseBtn;
        [SerializeField] private Button resumeBtn;
        [SerializeField] private Button homeBtn;
        #endregion

        #region Private Variables

        #endregion

        #region  Public Variables

        #endregion

        #region Monobehaviour Methods
        void Start()
        {
            OnGameStart();
        }

        void Update()
        {
            if (Keyboard.current.escapeKey.wasPressedThisFrame)
            {
                UIUtility.Utils.UIUtility.OnBackPressed();
            }

            if (Keyboard.current.fKey.wasPressedThisFrame)
            {
                OnGameOver();
            }
        }

        #endregion

        #region Public Methods
        public void OnGameStart()
        {
            AddListeners();
            menuCanvas.OnGameStart();
            instructionCanvas.OnGameStart();
            gameplayCanvas.OnGameStart();
            pauseCanvas.OnGameStart();
            gameoverCanvas.OnGameStart();

            menuCanvas.OpenCanvas();
        }

        public void OnGameOver()
        {
            gameoverCanvas.OpenCanvas();
        }
        #endregion

        #region  Private Methods        

        private void AddListeners()
        {
            playBtn.onClick.AddListener(OnPlayBtnClicked);
            instructionContinueBtn.onClick.AddListener(OnInstructionContinueBtnClicked);
            pauseBtn.onClick.AddListener(OnPauseBtnClicked);
            resumeBtn.onClick.AddListener(OnResumeBtnClicked);
            homeBtn.onClick.AddListener(OnHomeBtnClicked);
        }

        private void OnPlayBtnClicked()
        {
            Debug.Log("Opening instruction canvas");
            instructionCanvas.OpenCanvas();
        }

        private void OnInstructionContinueBtnClicked()
        {
            Debug.Log("Opening gameplay canvas");
            gameplayCanvas.OpenCanvas();
        }

        private void OnPauseBtnClicked()
        {
            Debug.Log("Opening pause canvas");
            pauseCanvas.OpenCanvas();
        }

        private void OnResumeBtnClicked()
        {
            Debug.Log("Opening gameplay canvas");
            gameplayCanvas.OpenCanvas();
        }

        private void OnHomeBtnClicked()
        {
            Debug.Log("Opening menu canvas");
            menuCanvas.OpenCanvas();
        }

        #endregion
    }
}
