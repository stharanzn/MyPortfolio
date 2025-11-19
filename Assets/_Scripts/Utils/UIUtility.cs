using System;
using System.Collections.Generic;
using DG.Tweening;
using UIUtility.Components;
using UnityEngine;
using Utils;

namespace UIUtility.Utils
{
    public static class UIUtility
    {
        #region Private Variables
        private static UICanvasComponent _previousCanvasCompnent;
        private static UICanvasComponent currentCanvasComponent;
        private static Tween backPressedTween;
        private static List<UICanvasComponent> canvasStack = new();
        private static Action _onCanvasOpenStarted;
        private static Action _onCanvasOpened;
        #endregion

        #region Private Methods
        private static void OnOpenCurrentCanvas()
        {
            currentCanvasComponent.OnOpen();
            if (currentCanvasComponent.CanvasType == Models.CanvasType.SCREEN)
            {
                _previousCanvasCompnent = currentCanvasComponent;
            }
        }
        #endregion

        #region Public Methods    
        public static void OnBackPressed()
        {
            if (canvasStack.Count > 1 && backPressedTween == null)
            {
                canvasStack[^1].OnClose();
                canvasStack.Remove(canvasStack[^1]);
                canvasStack[^1].OnOpen(() => backPressedTween = null);
                _previousCanvasCompnent = canvasStack[^1];
            }
        }

        public static void OpenCanvas(this UICanvasComponent uiCanvasComponent, Action onCanvasOpenStarted = null, Action onCanvasOpened = null)
        {
            if (currentCanvasComponent != null && currentCanvasComponent.CurrentCanvasState == Models.CanvasState.TRANSITION)
            {
                return;
            }
            currentCanvasComponent = uiCanvasComponent;
            if (uiCanvasComponent.CanvasType == Models.CanvasType.SCREEN)
            {
                canvasStack.Add(currentCanvasComponent);
            }
            if (_previousCanvasCompnent != null)
            {
                _previousCanvasCompnent.OnClose(OnOpenCurrentCanvas);
            }
            else
            {
                OnOpenCurrentCanvas();
            }
        }

        public static void CloseCanvas(this UICanvasComponent uICanvasComponent, Action onCanvasClosed = null)
        {
            uICanvasComponent.OnClose();
        }

        public static void OnSceneChange(this UICanvasComponent loadingCanvas)
        {
            canvasStack.Clear();
            loadingCanvas.OpenCanvas();
        }
        #endregion
    }
}
