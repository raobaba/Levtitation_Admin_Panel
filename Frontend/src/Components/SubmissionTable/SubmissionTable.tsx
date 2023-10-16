import React, { useState, useEffect } from 'react';

// Define the structure of a submission
interface Submission {
  id: number;
  name: string;
  email: string;
  submissionDate: string;
  // Add more submission fields as needed
}

const SubmissionTable: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSubmissions, setFilteredSubmissions] = useState<Submission[]>([]);

  // Simulated submission data - you should fetch real data from your API
  useEffect(() => {
    // Replace with an API call to fetch submission data
    const submissionData: Submission[] = [
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        submissionDate: '2023-10-15',
        // Add more submission fields as needed
      },
      // Add more submissions
    ];

    setSubmissions(submissionData);
    setFilteredSubmissions(submissionData);
  }, []);

  const handleSearch = () => {
    const filteredData = submissions.filter((submission) => {
      // You can adjust the criteria for filtering based on your requirements
      return (
        submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        submission.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setFilteredSubmissions(filteredData);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white p-8 rounded shadow-lg w-full">
        <h1 className="text-2xl font-semibold mb-4">Submission Table</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border rounded shadow appearance-none"
          />
          <button
            className="bg-blue-500 text-white rounded py-2 px-4 ml-2 hover:bg-blue-700"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Submission Date</th>
              {/* Add more table headers for submission fields as needed */}
            </tr>
          </thead>
          <tbody>
            {filteredSubmissions.map((submission) => (
              <tr key={submission.id}>
                <td>{submission.name}</td>
                <td>{submission.email}</td>
                <td>{submission.submissionDate}</td>
                {/* Add more table data for submission fields as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmissionTable;
