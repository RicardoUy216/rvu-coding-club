
import React from 'react';

const DeleteStudent = ({ studentId, onDeleteStudent }) => {
  const handleDeleteStudent = async () => {
    // Make a fetch DELETE request to delete the product
    try {
      const response = await fetch(`http://localhost:4001/students/${studentId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the student');
      }

      // Pass the deleted student's email to the parent component
      onDeleteStudent(studentId);
    } catch (error) {
      console.error('Error deleting the student:', error);
      alert('Failed to delete the student');
    }
  };

  return (
    <div>
      <button onClick={handleDeleteStudent}>Delete Student</button>
    </div>
  );
};

export default DeleteStudent;
