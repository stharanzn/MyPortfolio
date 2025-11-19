using UnityEngine;

namespace Portfolio.Utilities
{
    public class SpiralPlacementUtility
    {
        private enum Direction
        {
            Right,  // 0
            Up,     // 1
            Left,   // 2
            Down    // 3
        }

        // Current state
        private int x;
        private int y;
        private int unitMultiplier;
        private Direction currentDirection;

        // State for controlling the spiral logic
        private int stepsTakenInSegment;    // How many steps we've taken in the current direction
        private int currentSegmentLength;   // The target length of the current segment
        private int segmentsCompleted;      // How many segments we've completed at the current length
        private bool isFirstMove;           // Flag to handle the very first position (the center)

        /// <summary>
        /// Creates a new spiral placer.
        /// </summary>
        /// <param name="startX">The X coordinate of the center starting point.</param>
        /// <param name="startY">The Y coordinate of the center starting point.</param>
        public SpiralPlacementUtility(int startX = 0, int startY = 0, int unitMultiplier = 1)
        {
            // This is the position we will return on the *first* call.
            this.x = startX;
            this.y = startY;
            this.unitMultiplier = unitMultiplier;

            // Initialize the state for the *next* move (after the first)
            this.currentDirection = Direction.Right; // First move is to the right
            this.currentSegmentLength = 1;
            this.stepsTakenInSegment = 0;
            this.segmentsCompleted = 0;
            this.isFirstMove = true;
        }

        /// <summary>
        /// Gets the next position in the spiral.
        /// </summary>
        /// <returns>A (X, Y) tuple representing the next grid coordinate.</returns>
        public (int X, int Y) GetNextPosition()
        {
            // The very first call just returns the starting center point.
            if (isFirstMove)
            {
                isFirstMove = false;
                return (this.x, this.y);
            }

            // --- Calculate the next spiral position ---

            // 1. Move one step in the current direction
            switch (this.currentDirection)
            {
                case Direction.Right:
                    this.x++;
                    break;
                case Direction.Up:
                    this.y++; // Assuming +Y is Up
                    break;
                case Direction.Left:
                    this.x--;
                    break;
                case Direction.Down:
                    this.y--; // Assuming -Y is Down
                    break;
            }
            this.stepsTakenInSegment++;

            // 2. Check if this move completed the current segment
            if (this.stepsTakenInSegment == this.currentSegmentLength)
            {
                // 3. If so, turn 90 degrees "left"
                // (Right -> Up, Up -> Left, Left -> Down, Down -> Right)
                this.currentDirection = (Direction)(((int)this.currentDirection + 1) % 4);

                // 4. Reset segment steps and count this segment as completed
                this.stepsTakenInSegment = 0;
                this.segmentsCompleted++;

                // 5. Check if we need to increase the segment length
                // This happens every *two* completed segments (e.g., after Up, and after Down)
                if (this.segmentsCompleted == 2)
                {
                    this.segmentsCompleted = 0;
                    this.currentSegmentLength++; // Increase the length for the next two segments
                }
            }

            // 6. Return the new position
            return (this.x * unitMultiplier, this.y * unitMultiplier);
        }
    }
}
