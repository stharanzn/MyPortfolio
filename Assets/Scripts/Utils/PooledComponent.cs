using UnityEngine;

namespace Utils
{
    public abstract class PooledComponent : MonoBehaviour
    {
        #region Private Variables
        protected ObjectPoolView poolView;
        #endregion Private Variables

        #region Private Methods
        protected virtual void Repool()
        {
            poolView.Repool(this);
        }
        #endregion Private Methods

        #region Public Methods
        public void SetPool(ObjectPoolView poolView)
        {
            this.poolView = poolView;
        }
        #endregion Public Methods
    }
}
