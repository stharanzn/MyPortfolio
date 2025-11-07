using Common;
using UnityEngine;

namespace Portfolio.LandingScene.Model
{
    [System.Serializable]
    public struct LandingScenePanCameraSettings
    {
        public float PanSpeed;
        public float PanLerp;
        public float PanDepth;
        public float MaxPanSwipeMagnitude;
        public Vector2 PanXClamp;
        public Vector2 PanYClamp;
    }

    [System.Serializable]
    public struct LandingSceneZoomCameraSettings
    {
        public float ZoomSpeed;
        public float ZoomSmoothness;
        public float defaultZoom;
        public float MinZoom;
        public float MaxZoom;
    }

    public enum CameraState
    {
        TRANSITION,
        INACTIVE,
        ACTIVE
    }

}

