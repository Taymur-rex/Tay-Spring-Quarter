using UnityEngine;

public class CameraController : MonoBehaviour
{
    // Create Variables 
    [SerializeField, Tooltip("A reference to the target's transform componnt.")]
    private Transform target;
    [SerializeField, Tooltip("A offest for the camera's position relavite to the target's positon. ")]
    private Vector3 posOffest;

    private void LateUpdate()
    {
       // Every Frame, update the camrea's position based on the target position  
       transform.position = target. position + posOffest;
    }
     

}
