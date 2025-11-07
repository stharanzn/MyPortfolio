using Common;
using UnityEngine;

namespace Portfolio.Components
{
    public class WorldSpaceCanvasComponent : MonoBehaviour
    {
        #region Inspector Variables
        [SerializeField] private Canvas worldCanvas;
        #endregion Inspector Variables

        #region Public Variables
        #endregion Public Variables

        #region Private Variables
        private Camera mainCamera;
        #endregion Private Variables

        #region Monobehaviour Methods

        private void Start()
        {
            mainCamera = Camera.main;
        }

        private void Update()
        {
            if (mainCamera != null)
            {
                worldCanvas.transform.LookAt(mainCamera.transform.position);
            }
            else
            {
                Debug.LogWarning("main camera not found");
            }
        }
        #endregion Monobehaviour Methods

        #region Private Methods
        #endregion Private Methods

        #region Public Methods
        #endregion Public Methods
    }
}
