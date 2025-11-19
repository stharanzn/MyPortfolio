using System.Collections.Generic;
public enum Scene
{
    LandingScene,
    ProjectsScene,
}
public class SceneData
{
    public static Dictionary<int, string> SceneDataDict = new()
    {
    { 0, "LandingScene"},
    { 1, "ProjectsScene"},
    };
}
