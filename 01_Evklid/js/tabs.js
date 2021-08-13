document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how-we-work__link').forEach(function(stepLink) {
    stepLink.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path


      document.querySelectorAll('.step__content').forEach(function(stepContent) {
        stepContent.classList.remove('step__content_active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('step__content_active')



    });


  });

  // Делаем цвет активног шага
  const stepslink = document.querySelectorAll('.how-we-work__link')

  for (const linkFocus of stepslink) {
    linkFocus.addEventListener('click', () => {
      ClearFocusLink ()

      linkFocus.classList.add('_step__focus')
    })
  }

  function ClearFocusLink() {
    stepslink.forEach((linkFocus) => {
      linkFocus.classList.remove('_step__hold_color')
      linkFocus.classList.remove('_default__step_color')
    })
  }




});
