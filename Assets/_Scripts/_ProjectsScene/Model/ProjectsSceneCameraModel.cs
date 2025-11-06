using System;
using Common;
using UnityEngine;

namespace Portfolio.Projects.Models
{
    public struct CameraInput
    {
        public Vector2 Pan;
        public float Zoom;
    }

    [Serializable]
    public struct CameraPanSettings
    {
        public float PanSpeed;
        public float PanDepth;
        public float PanLerp;
        public float MaxPanSwipeMagnitude;
    }

    [Serializable]
    public struct CameraZoomSettings
    {
        public float ZoomSpeed;
        public float ZoomSmoothness;
        public float defaultZoom;
        public float MinZoom;
        public float MaxZoom;

    }
}
