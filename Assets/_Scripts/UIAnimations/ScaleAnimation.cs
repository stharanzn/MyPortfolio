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
        private Vector3 _orignalScale;
        #endregion

        #region Monobehavior Methods
        private void Start()
        {
            rectTransform = GetComponent<RectTransform>();
            _orignalScale = rectTransform.localScale;
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
            animationTween?.Kill();

            Vector3 startScale;
            Vector3 endScale;

            UIScaleDataComponent uiScaleData = (UIScaleDataComponent)animationData;
            var offScale = uiScaleData.UIScaleType switch
            {
                UIScaleType.ZOOM_IN => Vector3.zero,
                UIScaleType.ZOOM_OUT => new Vector3(2f, 2f, 2f),
                _ => _orignalScale,
            };
            startScale = isOpening ? offScale : _orignalScale;
            endScale = isOpening ? _orignalScale : offScale;

            rectTransform.localScale = startScale;
            if (isOpening)
            {
                yield return new WaitForSeconds(animationData.Delay);
            }

            animationTween = rectTransform.DOScale(endScale, uiScaleData.UIScaleDuration)
                .SetEase(uiScaleData.Ease)
                .OnComplete(() =>
                {

                    onComplete?.Invoke();
                    animationTween = null;
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
