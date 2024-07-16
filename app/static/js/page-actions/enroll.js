document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.enroll-button').forEach(function(button) {
    button.addEventListener('click', function() {
      const confirmation = this.nextElementSibling;
      confirmation.style.display = 'block';
    });
  });

  document.querySelectorAll('.cancel-button').forEach(function(button) {
    button.addEventListener('click', function() {
      const confirmation = this.closest('.confirmation');
      confirmation.style.display = 'none';
    });
  });

  document.querySelectorAll('.confirm').forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault();

      const email = this.closest('form').querySelector('#email').value;
      const courseId = this.closest('form').querySelector('#course_id').value;

      if (!email || !courseId) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Please enter both your email and course ID.',
        });
        return;
      }

      addCourseToUser(email, courseId);
    });
  });

  async function addCourseToUser(email, courseId) {
    const data = {
      email: email,
      course_id: courseId
    };

    try {
      const response = await fetch('http://127.0.0.1:5001/api/v1/post_courses_to_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();document.addEventListener('DOMContentLoaded', function() {
          document.querySelectorAll('.enroll-button').forEach(function(button) {
            button.addEventListener('click', function() {
              const confirmation = this.nextElementSibling;
              confirmation.style.display = 'block';
            });
          });
        
          document.querySelectorAll('.cancel-button').forEach(function(button) {
            button.addEventListener('click', function() {
              const confirmation = this.closest('.confirmation');
              confirmation.style.display = 'none';
            });
          });
        
          document.querySelectorAll('.confirm').forEach(function(button) {
            button.addEventListener('click', async function(event) {
              event.preventDefault();
        
              const email = this.closest('form').querySelector('#email').value;
              const courseId = this.closest('form').querySelector('#course_id').value;
        
              if (!email || !courseId) {
                Swal.fire({
                  icon: 'warning',
                  title: 'Oops...',
                  text: 'Please enter both your email and course ID.',
                });
                return;
              }
        
              try {
                const response = await addCourseToUser(email, courseId);
                if (response && response.success) {
                  await Swal.fire({
                    icon: 'success',
                    title: 'Course Added Successfully',
                    text: 'Course Added! Go to Dashoboard to view your course.',
                  }).then(() => {
                    window.location.href = '/';
                  });
                } else {
                  Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to add course. Please try again later.',
                  });
                }
              } catch (error) {
                console.error('Error adding course:', error);
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Error adding course.',
                });
              }
            });
          });
        
          async function addCourseToUser(email, courseId) {
            const data = {
              email: email,
              course_id: courseId
            };
        
            try {
              const response = await fetch('http://127.0.0.1:5001/api/v1/post_courses_to_user', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
              });
        
              if (!response.ok) {
                const errorData = await response.json();
                console.error('Error:', errorData.error);
                throw new Error(errorData.error);
              }
        
              return await response.json();
            } catch (error) {
              console.error('Error adding course:', error);
              throw error;
            }
          }
        });
        
        console.error('Error:', errorData.error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: errorData.error,
        });
      } else {
        const result = await response.json();
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Course added successfully!',
        });
        console.log('Course added:', result);
      }
    } catch (error) {
      console.error('Error adding course:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error adding course.',
      });
    }
  }
});
