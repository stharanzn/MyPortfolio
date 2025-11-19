using Common;
using Portfolio.Model;
using UnityEngine;
using Utils;

namespace Portfolio.Projects.Components
{
    [RequireComponent(typeof(Outline), typeof(Collider))]
    public class ProjectCliffComponent : PooledComponent
    {
        #region Inspector Variables        
        [SerializeField] private Transform cameraTargetOnCliffSelectedTransform;
        [SerializeField] private ProjectDisplayData projectDisplayData;
        #endregion Inspector Variables

        #region Public Variables
        public Transform CameraTargetOnFocus => cameraTargetOnCliffSelectedTransform;
        public ProjectDisplayData ProjectDisplayData => projectDisplayData;
        #endregion Public Variables

        #region Private Variables  
        private Outline _outlineComponent;
        #endregion Private Variables

        #region Monobehaviour Methods
        private void Start()
        {
            OnGameStart();
        }
        #endregion Monobehaviour Methods

        #region Private Methods

        #endregion Private Methods

        #region Public Methods

        public void OnGameStart()
        {
            _outlineComponent = GetComponent<Outline>();
            _outlineComponent.enabled = false;
        }

        public void OnCliffSelected()
        {
            _outlineComponent.enabled = true;
        }

        public void OnCliffDeselected()
        {
            _outlineComponent.enabled = false;
        }

        #endregion Public Methods
    }
}
