using System;
using UIUtility.Interfaces;
using UnityEngine;
using DG.Tweening;
using UIUtility.Models;
using UIUtility.Components;
using System.Collections;

namespace UIUtility.Animations
{

    [RequireComponent(typeof(UIFlyDataComponent), typeof(UIAnimationComponent))]
    public class FlyAnimation : UIAnimationBehaviourComponent
    {
        #region Inspector Variables
        #endregion

        #region Private Variables
        private Tween animationTween;
        #endregion

        #region Monobehavior Methods
        private void Reset()
        {
            UIAnimationComponent uIAnimationComponent = GetComponent<UIAnimationComponent>();
            UIFlyDataComponent uIFlyDataComponent = GetComponent<UIFlyDataComponent>();
            uIAnimationComponent.SetData(uIFlyDataComponent, this);
        }
        #endregion

        #region Private Methods    
        private IEnumerator AnimationCoroutine(RectTransform rectTransform, UIAnimationContainer animationData, bool isOpening, Action onComplete = null)
        {
            Vector3 startPos = rectTransform.anchoredPosition;
            Vector3 endPos = rectTransform.anchoredPosition;
            animationTween?.onKill();
            UIFlyDataComponent uIFlyData = (UIFlyDataComponent)animationData;
            switch (uIFlyData.UIFlyDirection)
            {
                case UIFlyDirection.LEFT:
                    startPos = isOpening ? new Vector3(-Screen.width, rectTransform.anchoredPosition.y, 0) : rectTransform.anchoredPosition;
                    endPos = isOpening ? rectTransform.anchoredPosition : new Vector3(-Screen.width, rectTransform.anchoredPosition.y, 0);
                    break;

                case UIFlyDirection.RIGHT:
                    startPos = isOpening ? new Vector3(Screen.width, rectTransform.anchoredPosition.y, 0) : rectTransform.anchoredPosition;
                    endPos = isOpening ? rectTransform.anchoredPosition : new Vector3(Screen.width, rectTransform.anchoredPosition.y, 0);
                    break;

                case UIFlyDirection.UP:
                    startPos = isOpening ? new Vector3(rectTransform.anchoredPosition.x, Screen.height, 0) : rectTransform.anchoredPosition;
                    endPos = isOpening ? rectTransform.anchoredPosition : new Vector3(rectTransform.anchoredPosition.x, Screen.height, 0);
                    break;

                case UIFlyDirection.DOWN:
                    startPos = isOpening ? new Vector3(rectTransform.anchoredPosition.x, -Screen.height, 0) : rectTransform.anchoredPosition;
                    endPos = isOpening ? rectTransform.anchoredPosition : new Vector3(rectTransform.anchoredPosition.x, -Screen.height, 0);
                    break;
            }
            rectTransform.anchoredPosition = startPos;
            if (isOpening)
            {
                yield return new WaitForSeconds(animationData.Delay);
            }

            animationTween = rectTransform.DOAnchorPos(endPos, uIFlyData.UIFlyInDuration).SetEase(uIFlyData.Ease).OnComplete(() =>
            {
                if (!isOpening)
                {
                    rectTransform.anchoredPosition = startPos;
                }
                else
                {
                    rectTransform.anchoredPosition = endPos;
                }
                onComplete?.Invoke();
                animationTween = null;
            }).OnKill(() =>
            {
                if (!isOpening)
                {
                    rectTransform.anchoredPosition = startPos;
                }
                else
                {
                    rectTransform.anchoredPosition = endPos;
                }
                // animationTween = null;
            });


        }
        #endregion

        #region Public Methods
        public override void Animate(RectTransform rectTransform, UIAnimationContainer animationData, bool isOpening, Action onComplete = null)
        {
            StartCoroutine(AnimationCoroutine(rectTransform, animationData, isOpening, onComplete));
        }
        #endregion
    }
}
