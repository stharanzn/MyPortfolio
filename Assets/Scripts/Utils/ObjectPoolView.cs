using Common;
using System.Collections.Generic;
using UnityEngine;

namespace Utils
{
    public abstract class ObjectPoolView : EntityView
    {
        [SerializeField] protected PooledComponent pooledComponentPrefab;
        [SerializeField] protected Transform poolParent;

        protected Queue<PooledComponent> poolQueue;

        protected virtual void SetupPool(int initialPoolSize)
        {
            if (poolQueue != null && poolQueue.Count > 1)
            {
                foreach (var item in poolQueue)
                {
                    Destroy(item.gameObject);
                }
            }

            poolQueue = new Queue<PooledComponent>();

            for (int i = 0; i < initialPoolSize; i++)
            {
                PooledComponent item = Instantiate(pooledComponentPrefab, poolParent);
                item.gameObject.SetActive(false);
                item.SetPool(this);
                poolQueue.Enqueue(item);
            }
        }

        protected virtual PooledComponent GetPooledObject()
        {
            if (poolQueue == null)
            {
                Debug.LogError("[ObjectPoolView/GetPooledObject]: use SetupPool() to initialize pool before getting pooled object");
                return null;
            }

            if (poolQueue.Count <= 0)
            {
                PooledComponent item = Instantiate(pooledComponentPrefab, poolParent);
                item.gameObject.SetActive(false);
                item.SetPool(this);
                poolQueue.Enqueue(item);
            }

            PooledComponent pooledComponent = poolQueue.Dequeue();
            pooledComponent.gameObject.SetActive(true);

            return pooledComponent;
        }

        public abstract override void OnGameOver();

        public abstract override void OnGameStart();

        public virtual void Repool(PooledComponent pooledComponent)
        {
            pooledComponent.gameObject.SetActive(false);
            poolQueue.Enqueue(pooledComponent);
        }
    }
}
