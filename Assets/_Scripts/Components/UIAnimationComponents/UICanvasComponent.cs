using System;
using DG.Tweening;
using UIUtility.Models;
using UnityEngine;
using UnityEngine.UI;
using Utils;

namespace UIUtility.Components
{
    [RequireComponent(typeof(CanvasGroup), typeof(Canvas))]
    public class UICanvasComponent : MonoBehaviour
    {
        #region Inspector Variables 
        [SerializeField] private UIAnimationComponent[] uiAnimationComponentsArray;
        [SerializeField] private Button[] canvasButtonsArray;
        [SerializeField] private CanvasType canvasType;
        #endregion

        #region Private Variables
        private CanvasState _canvasState;
        private Canvas _canvasComponent;
        int _closeCount;
        int _openCount;
        Action _onAnimationsComplete;
        private bool _isComponentInitialized;
        #endregion

        #region Public Variables  
        public CanvasState CurrentCanvasState => _canvasState;
        public CanvasType CanvasType => canvasType;
        #endregion

        #region Monobehaviour Methods
        #endregion

        #region Private Methods
        private void OnCloseAnimationsComplete()
        {
            _closeCount++;
            if (_closeCount >= uiAnimationComponentsArray.Length)
            {
                _canvasComponent.enabled = false;
                _onAnimationsComplete?.Invoke();
                _onAnimationsComplete = null;
            }
        }

        private void OnOpenAnimationComplete()
        {
            _openCount++;
        }

        private void SetCanvasState(CanvasState state)
        {
            _canvasState = state;
        }
        #endregion

        #region Public Methods        

        internal void OnOpen(Action onAnimationComplete = null)
        {
            if (!_isComponentInitialized)
            {
                OnGameStart();
            }

            GetComponent<Canvas>().enabled = true;
            if (uiAnimationComponentsArray.Length > 0)
            {
                foreach (UIAnimationComponent uIAnimationComponent in uiAnimationComponentsArray)
                {
                    uIAnimationComponent.OnOpen(onAnimationComplete);
                }
            }
            else
            {
                onAnimationComplete?.Invoke();
            }

        }

        internal void OnClose(Action onAnimationsComplete = null)
        {
            if (!_isComponentInitialized)
            {
                OnGameStart();
            }
            _closeCount = 0;
            this._onAnimationsComplete = onAnimationsComplete;
            if (uiAnimationComponentsArray.Length > 0)
            {
                foreach (UIAnimationComponent uIAnimationComponent in uiAnimationComponentsArray)
                {
                    uIAnimationComponent.OnClose(OnCloseAnimationsComplete);
                }
            }
            else
            {
                OnCloseAnimationsComplete();
            }
        }

        public void OnGameStart()
        {
            _isComponentInitialized = true;
            _closeCount = uiAnimationComponentsArray.Length;
            _canvasComponent = GetComponent<Canvas>();
            _canvasComponent.enabled = false;
            SetCanvasState(CanvasState.CLOSE);
            foreach (UIAnimationComponent uIAnimationComponent in uiAnimationComponentsArray)
            {
                uIAnimationComponent.InitComponent();
            }
        }

        public void OnGameOver()
        {

        }
        #endregion
    }

}
