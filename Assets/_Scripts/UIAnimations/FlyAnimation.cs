using System;
using UIUtility.Interfaces;
using UnityEngine;
using DG.Tweening;
using UIUtility.Models;
using UIUtility.Components;
using System.Collections;
using Utils;

namespace UIUtility.Animations
{

    [RequireComponent(typeof(UIFlyDataComponent), typeof(UIAnimationComponent), typeof(RectTransform))]
    public class FlyAnimation : UIAnimationBehaviourComponent
    {
        #region Inspector Variables
        #endregion

        #region Private Variables
        private Tween animationTween;
        private RectTransform rectTransform;
        private Vector3 orignalPosition;
        #endregion

        #region Monobehavior Methods
        private void Start()
        {
            rectTransform = GetComponent<RectTransform>();
            orignalPosition = rectTransform.anchoredPosition;
        }

        private void Reset()
        {
            UIAnimationComponent uIAnimationComponent = GetComponent<UIAnimationComponent>();
            UIFlyDataComponent uIFlyDataComponent = GetComponent<UIFlyDataComponent>();
            uIAnimationComponent.SetData(uIFlyDataComponent, this);
        }
        #endregion

        #region Private Methods    
        private IEnumerator AnimationCoroutine(UIAnimationContainer animationData, bool isOpening, Action onComplete = null)
        {
            Vector3 startPos = Vector3.zero;
            Vector3 endPos = Vector3.zero;
            // animationTween?.onKill();
            UIFlyDataComponent uIFlyData = (UIFlyDataComponent)animationData;
            var offscreenPos = uIFlyData.UIFlyDirection switch
            {
                UIFlyDirection.LEFT => new Vector3(-Screen.width, rectTransform.anchoredPosition.y, 0),
                UIFlyDirection.RIGHT => new Vector3(Screen.width, rectTransform.anchoredPosition.y, 0),
                UIFlyDirection.UP => new Vector3(rectTransform.anchoredPosition.x, Screen.height, 0),
                UIFlyDirection.DOWN => new Vector3(rectTransform.anchoredPosition.x, -Screen.height, 0),
                _ => orignalPosition,
            };
            startPos = isOpening ? offscreenPos : orignalPosition;
            endPos = isOpening ? orignalPosition : offscreenPos;
            rectTransform.DOAnchorPos(startPos, 0).WaitForCompletion();
            if (isOpening)
            {
                yield return new WaitForSeconds(animationData.Delay);
            }

            animationTween = rectTransform.DOAnchorPos(endPos, uIFlyData.UIFlyInDuration).SetEase(uIFlyData.Ease).OnComplete(() =>
            {
                onComplete?.Invoke();
                animationTween = null;
            });


        }
        #endregion

        #region Public Methods

        public void OnCanvasClosed()
        {

        }

        public override void Animate(UIAnimationContainer animationData, bool isOpening, Action onComplete = null)
        {
            StartCoroutine(AnimationCoroutine(animationData, isOpening, onComplete));
        }
        #endregion
    }
}
