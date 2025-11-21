using System;
using DG.Tweening;
using UIUtility.Components;
using UIUtility.Models;
using UnityEngine;
using Utils;

namespace UIUtility.Animations
{
    [RequireComponent(typeof(UIFadeDataComponent), typeof(UIAnimationComponent), typeof(CanvasGroup))]
    [RequireComponent(typeof(RectTransform))]
    public class FadeAnimation : UIAnimationBehaviourComponent
    {
        #region Inspector Variables

        #endregion

        #region Private Variables
        private RectTransform rectTransform;
        #endregion

        #region  Public Variables

        #endregion

        #region Monobehaviour Methods

        private void Start()
        {
            rectTransform = GetComponent<RectTransform>();
        }

        private void Reset()
        {
            UIAnimationComponent uIAnimationComponent = GetComponent<UIAnimationComponent>();
            UIFadeDataComponent uIFlyDataComponent = GetComponent<UIFadeDataComponent>();
            uIAnimationComponent.SetData(uIFlyDataComponent, this);
        }
        #endregion

        #region Public Methods
        public override void Animate(UIAnimationContainer animationData, bool isOpening, Action onComplete = null)
        {
            UIFadeDataComponent uIFadeDataComponent = (UIFadeDataComponent)animationData;
            CanvasGroup canvasGroup = rectTransform.GetComponent<CanvasGroup>();
            if (isOpening)
            {
                canvasGroup.DOFade(1, uIFadeDataComponent.FadeDuration).OnComplete(() => { onComplete?.Invoke(); }).OnKill(() => { canvasGroup.alpha = 1; });
            }
            else
            {
                canvasGroup.DOFade(0, uIFadeDataComponent.FadeDuration).OnComplete(() => { onComplete?.Invoke(); }).OnKill(() => { canvasGroup.alpha = 0; });
            }
        }

        #endregion

        #region  Private Methods

        #endregion
    }
}
