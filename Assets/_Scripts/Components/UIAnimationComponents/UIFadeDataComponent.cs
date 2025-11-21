using Common;
using UIUtility.Models;
using UnityEngine;

namespace UIUtility.Components
{
    public class UIFadeDataComponent : UIAnimationContainer
    {
        #region Inspector Variables
        [SerializeField] private float fadeDuration = 0.5f;
        #endregion Inspector Variables

        #region Public Variables
        public float FadeDuration => fadeDuration;
        #endregion Public Variables

        #region Private Variables
        #endregion Private Variables

        #region Monobehaviour Methods
        #endregion Monobehaviour Methods

        #region Private Methods
        #endregion Private Methods

        #region Public Methods
        #endregion Public Methods
    }
}
