using System;
using UIUtility.Interfaces;
using UIUtility.Models;
using UnityEngine;

public abstract class UIAnimationBehaviourComponent : MonoBehaviour
{
    public abstract void Animate(UIAnimationContainer animationData, bool isOpening, Action onComplete = null);
}
