using Common;
using DG.Tweening;
using UIUtility.Components;
using UnityEngine;

namespace UIUtility.Models
{

    public enum CanvasType
    {
        SCREEN,
        OVERLAY,
        TRANSITION,
    }

    public enum CanvasState
    {
        CLOSE,
        TRANSITION,
        OPEN
    }

    [System.Serializable]
    public enum UIFlyDirection
    {
        LEFT,
        RIGHT,
        UP,
        DOWN
    }

    [System.Serializable]
    public enum UIScaleType
    {
        ZOOM_IN,
        ZOOM_OUT
    }

    public class UIAnimationContainer : MonoBehaviour
    {
        public float Delay;
    }

    [System.Serializable]
    public struct UIElementAnimationSetting
    {
        public UIAnimationContainer EnterData;
        public UIAnimationContainer ExitData;
    }

    [System.Serializable]
    public struct RectTransformData
    {
        public Vector2 anchoredPosition;
        public Vector3 anchoredPosition3D;
        public Vector2 sizeDelta;
        public Vector3 localScale;
        public Quaternion localRotation;
        public Vector3 localPosition;

        public RectTransformData(RectTransform rectTransform)
        {
            anchoredPosition = rectTransform.anchoredPosition;
            anchoredPosition3D = rectTransform.anchoredPosition3D;
            sizeDelta = rectTransform.sizeDelta;
            localScale = rectTransform.localScale;
            localRotation = rectTransform.localRotation;
            localPosition = rectTransform.localPosition;
        }
    }

}


