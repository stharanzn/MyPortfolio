using Common;
using UnityEngine;
using UnityEngine.Video;

namespace Portfolio.Model
{
    public enum HighlightState
    {
        INACTIVE,
        ACTIVE
    }

    [System.Serializable]
    public struct ProjectDisplayData
    {
        public string ProjectName;
        public string ProjectDescription;
        public Sprite ProjectIcon;
        public string ProjectVideoUrl;
        public string CTALink;
    }
}
