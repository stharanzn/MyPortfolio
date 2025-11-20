using System;
using Common;
using UIUtility.Components;
using UIUtility.Interfaces;
using UIUtility.Models;
using UnityEngine;

namespace UIUtility.Components
{
    public class UIAnimationComponent : MonoBehaviour
    {
        #region Inspector Variables
        [SerializeField] private UIElementAnimationSetting uIElementAnimationSetting;
        [SerializeField] private UIAnimationBehaviourComponent animationBehaviour;
        #endregion Inspector Variables

        #region Public Variables
        #endregion Public Variables

        #region Private Variables
        private RectTransformData _initRectTransform;
        #endregion Private Variables

        #region Private Methods

        #endregion Private Methods

        #region Public Methods

        public void SetData(UIAnimationContainer animationContainer, UIAnimationBehaviourComponent uIAnimationBehaviourComponent)
        {
            animationBehaviour = uIAnimationBehaviourComponent;
            uIElementAnimationSetting.EnterData = animationContainer;
            uIElementAnimationSetting.ExitData = animationContainer;
        }

        public void InitComponent()
        {
            RectTransform rectTransform = animationBehaviour.gameObject.GetComponent<RectTransform>();
            _initRectTransform = new(rectTransform);
        }

        public void OnOpen(Action onAnimationComplete)
        {
            animationBehaviour?.Animate(uIElementAnimationSetting.EnterData, true, onAnimationComplete);
        }

        public void OnClose(Action onAnimationComplete)
        {
            animationBehaviour?.Animate(uIElementAnimationSetting.ExitData, false, onAnimationComplete);
        }
        #endregion Public Methods
    }
}
