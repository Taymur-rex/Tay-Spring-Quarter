using UnityEngine;

public class PlayerController : MonoBehaviour
{
    // The speed at which the player moves
    public float movespeed = 5f;

    public Rigidbody rb;

    private void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    private void FixedUpdate(){
        // Collect Player Input
        float xInput = Input.GetAxis("Horizontal");
        float zInput = Input.GetAxis("Vertical ");
    }
}
