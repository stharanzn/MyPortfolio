using DG.Tweening;
using UIUtility.Models;
using UnityEngine;

namespace UIUtility.Components
{
    public class UIScaleDataComponent : UIAnimationContainer
    {
        [SerializeField] private UIScaleType uIScaleType;
        [SerializeField] private float uIScaleDuration = 0.5f;
        [SerializeField] private Ease ease;

        public UIScaleType UIScaleType => uIScaleType;
        public float UIScaleDuration => uIScaleDuration;
        public Ease Ease => ease;
    }
}
