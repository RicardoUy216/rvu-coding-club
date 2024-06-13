
import React from 'react';

const DeleteApplicant = ({ applicantId, onDeleteApplicant }) => {
  const handleDeleteApplicant = async () => {
    // Make a fetch DELETE request to delete the product
    try {
      const response = await fetch(`http://localhost:4001/applicants/${applicantId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the applicant');
      }

      // Pass the deleted student's id to the parent component
      onDeleteApplicant(applicantId);
    } catch (error) {
      console.error('Error deleting the applicant:', error);
      alert('Failed to delete the applicant');
    }
  };

  return (
    <div>
      <button onClick={handleDeleteApplicant}>Delete Applicant</button>
    </div>
  );
};

export default DeleteApplicant;