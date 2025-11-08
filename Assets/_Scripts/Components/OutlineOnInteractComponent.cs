using Common;
using Portfolio.Model;
using UnityEngine;

namespace Portfolio.Components
{

    [RequireComponent(typeof(Outline), typeof(BoxCollider))]
    public class OutlineOnInteractComponent : MonoBehaviour
    {
        #region Inspector Variables
        [SerializeField] private HighlightState initHighlightState;
        #endregion Inspector Variables

        #region Public Variables
        #endregion Public Variables

        #region Private Variables
        private HighlightState _currentState;
        private Outline outlineComponent;
        #endregion Private Variables

        #region Monobehaviour Methods
        private void Start()
        {
            outlineComponent = GetComponent<Outline>();
            _currentState = HighlightState.INACTIVE;

            outlineComponent.enabled = initHighlightState == HighlightState.ACTIVE;
        }
        #endregion Monobehaviour Methods

        #region Private Methods
        #endregion Private Methods

        #region Public Methods
        public void SetHighlightState(HighlightState state)
        {
            if (_currentState == state) return;
            _currentState = state;
            outlineComponent.enabled = state == HighlightState.ACTIVE;
        }
        #endregion Public Methods
    }
}
