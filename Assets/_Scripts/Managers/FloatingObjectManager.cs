using UnityEngine;
using System.Collections.Generic;
using Utils;

/// <summary>
/// Manages a list of GameObjects, giving each one a smooth, time-offsetted
/// vertical bobbing motion and a gentle, independent rotation.
/// </summary>
public class FloatingObjectManager : SingletonUtility<FloatingObjectManager>
{
    [Header("Target Objects")]
    [Tooltip("Drag all GameObjects that should float into this list.")]
    public List<GameObject> targetObjects = new List<GameObject>();

    // --- Animation Settings ---
    [Header("Vertical Bobbing (Float)")]
    [Tooltip("The height distance the objects move up and down (in meters).")]
    public float amplitude = 0.5f;
    [Tooltip("The speed (frequency) of the bobbing motion.")]
    public float frequency = 1f;

    [Header("Gentle Rotation")]
    [Tooltip("The base speed of rotation (degrees per second). A random factor will be added.")]
    public float baseRotationSpeed = 5f;

    // --- Internal Data Structure for each managed object ---
    private struct FloatingItemData
    {
        public Transform transform;
        public Vector3 startPos;
        public float timeOffset;
        public float rotationMultiplier; // Used to randomize rotation slightly
    }

    private List<FloatingItemData> _floatingItems = new List<FloatingItemData>();

    void Start()
    {
        InitializeFloatingItems();
    }

    /// <summary>
    /// Initializes the internal data structure for each target object.
    /// </summary>
    private void InitializeFloatingItems()
    {
        if (targetObjects.Count == 0)
        {
            Debug.LogWarning("FloatingObjectManager has no target objects assigned.");
            return;
        }

        foreach (GameObject target in targetObjects)
        {
            if (target != null)
            {
                // Create a data entry for the item
                FloatingItemData data = new FloatingItemData
                {
                    transform = target.transform,
                    startPos = target.transform.position,

                    // CRITICAL: Give each item a unique random time offset
                    timeOffset = Random.Range(0f, 10f),

                    // // Add a small random factor to rotation speed for more variation
                    // rotationMultiplier = Random.Range(0.8f, 1.2f)
                };

                _floatingItems.Add(data);
            }
        }
    }

    void Update()
    {
        // Iterate through all tracked items and apply the animation
        for (int i = 0; i < _floatingItems.Count; i++)
        {
            FloatingItemData data = _floatingItems[i];

            // 1. Calculate the Vertical Bobbing (Y-axis movement)

            float timeValue = Time.time + data.timeOffset;
            float sinValue = Mathf.Sin(timeValue * frequency);
            float bobbingY = sinValue * amplitude;

            // Set the new position: Keep the original X and Z, and calculate the new Y
            Vector3 newPos = data.startPos;
            newPos.y += bobbingY;

            data.transform.position = newPos;


            // // 2. Apply Gentle Rotation

            // float rotationAmount = baseRotationSpeed * data.rotationMultiplier * Time.deltaTime;

            // // Rotate around the local Y-axis
            // data.transform.Rotate(Vector3.up, rotationAmount, Space.Self);
        }
    }
}