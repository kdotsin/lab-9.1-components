import AlertBox from "./components/AlertBox/AlertBox"

function App() {

  return (
    <>
      <AlertBox
        type="success"
        message="Your profile has been updated successfully!"
        onClose={() => alert('Alert closed')}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>
    </>
  )
}

export default App
