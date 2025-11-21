using DG.Tweening;
using UIUtility.Models;
using UnityEngine;

namespace UIUtility.Components
{
    public class UIFlyDataComponent : UIAnimationContainer
    {
        [SerializeField] private UIFlyDirection uIFlyDirection;
        [SerializeField] private float uiFlyDuration = 0.5f;
        [SerializeField] private Ease ease = Ease.OutSine;

        public UIFlyDirection UIFlyDirection => uIFlyDirection;
        public float UIFlyInDuration => uiFlyDuration;
        public Ease Ease => ease;
    }
}