using UnityEngine;
public class PlayerController : MonoBehaviour
{
    public float movementSpeed = 5f; // Variable to controll how fast the player moves
    public Rigidbody rb; // Empty reference to thr CharacterController component on the player

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        rb = GetComponent<Rigidbody>(); // Get the CharacterController component attactched to the player
    }
    void FixedUpdate()
    {
        float horizontalInput = Input.GetAxis("Horizontal"); // Stores the Horizontal(Left/Right) input of the player
        float verticalInput = Input.GetAxis("Vertical"); // Stores the Vertical (Up/Down) input of the player

        Vector3 movement = new Vector3(horizontalInput, 0f, verticalInput); // Calculate the direction the player sgould move based on the input
        rb.AddForce(movement*movementSpeed*Time.deltaTime, ForceMode.Impulse);
    }
}
