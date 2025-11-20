using System;
using System.Collections;
using DG.Tweening;
using UIUtility.Components;
using UIUtility.Models;
using UnityEngine;

namespace UIUtility.Animations
{
    [RequireComponent(typeof(UIScaleDataComponent), typeof(UIAnimationComponent), typeof(RectTransform))]
    public class ScaleAnimation : UIAnimationBehaviourComponent
    {
        #region Inspector Variables
        #endregion

        #region Private Variables
        private Tween animationTween;
        private RectTransform rectTransform;
        #endregion

        #region Monobehavior Methods
        private void Start()
        {
            rectTransform = GetComponent<RectTransform>();
        }

        private void Reset()
        {
            UIAnimationComponent uIAnimationComponent = GetComponent<UIAnimationComponent>();
            UIScaleDataComponent uIFlyDataComponent = GetComponent<UIScaleDataComponent>();
            uIAnimationComponent.SetData(uIFlyDataComponent, this);
        }
        #endregion

        #region Private Methods
        private IEnumerator AnimationCoroutine(UIAnimationContainer animationData, bool isOpening, Action onComplete = null)
        {
            if (animationTween != null)
            {
                animationTween.Kill();
            }

            Vector3 startScale = rectTransform.localScale;
            Vector3 endScale = rectTransform.localScale;

            UIScaleDataComponent uiScaleData = (UIScaleDataComponent)animationData;

            switch (uiScaleData.UIScaleType)
            {
                case UIScaleType.ZOOM_IN:
                    startScale = isOpening ? Vector3.zero : rectTransform.localScale;
                    endScale = isOpening ? rectTransform.localScale : Vector3.zero;
                    break;

                case UIScaleType.ZOOM_OUT:
                    startScale = isOpening ? new Vector3(2f, 2f, 2f) : rectTransform.localScale;
                    endScale = isOpening ? rectTransform.localScale : new Vector3(2f, 2f, 2f);
                    break;
            }

            rectTransform.localScale = startScale;
            if (isOpening)
            {
                yield return new WaitForSeconds(animationData.Delay);
            }

            animationTween = rectTransform.DOScale(endScale, uiScaleData.UIScaleDuration)
                .SetEase(uiScaleData.Ease)
                .OnComplete(() =>
                {
                    if (!isOpening)
                    {
                        rectTransform.localScale = startScale;
                    }
                    else
                    {
                        rectTransform.localScale = endScale;
                    }
                    onComplete?.Invoke();
                    animationTween = null;
                })
                .OnKill(() =>
                {
                    if (!isOpening)
                    {
                        rectTransform.localScale = startScale;
                    }
                    else
                    {
                        rectTransform.localScale = endScale;
                    }
                });
        }
        #endregion

        #region Public Methods
        public override void Animate(UIAnimationContainer animationData, bool isOpening, Action onComplete = null)
        {
            StartCoroutine(AnimationCoroutine(animationData, isOpening, onComplete));
        }
        #endregion
    }
}
