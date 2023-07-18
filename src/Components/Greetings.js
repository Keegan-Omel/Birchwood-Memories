function Greeting() {
    // TODO: Convert `greeting` to a state variable using the useState hook. Give it a initial value of 'Welcome the following students to class!'
    const [greeting, setGreeting] = useState('Welcome the following students to class!');
    // TODO: Convert `group` to a state variable using the useState hook. Set to an initial value to an array including three students in your class. (ex. ["John", "Grace", "Jared"])
    const [group, setGroup] = useState(['Keegan', 'Matthew', 'Katharine']);
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">State activity!</div>
        <div className="card-body">
          {/* TODO: Fix the `p` tag below to instead render the `greeting` variable */}
          <ul>
            <p className="card-text">{greeting}</p>
            {group.map((student, index) => (
              <li>Student {index + 1}: {student}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }