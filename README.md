# Manual.co Frontend Assignment

As part of the hiring process, we ask all our candidates to complete an assignment, in order for
us to assess their coding skills and way of thought. Ideally, we’d like to see how comfortable you
are with NextJS, but if you prefer you can complete the assignment in plain React if that is more
convenient for you.

We estimate it will take you close to 1 full work day to complete it. To allow for flexibility in your
time, you will have 1 full week from the day this assignment was given to you to complete it.
You will need to make decisions as part of the implementation. There is not, strictly, a correct or
wrong choice to these decisions; all are good, as long as you can explain why. We look forward
to meeting in person and having this discussion after you have completed your assignment.

### The business case

At Manual we sometimes create landing pages to better explain our value proposition to users
who land on these from ads. As an experiment, we’ve decided to create a landing page that will
include a quiz, which will guide users through deciding if Manual is good for them.

### User story

As a visitor, I want a landing page and quiz to help me decide if Manual is the correct product
for me

### Specifications

You’ll find the design mockup on Zeplin: [https://zpl.io/bzA5Z0z](https://zpl.io/bzA5Z0z) and also at the end of this
document.

If you don’t already have an account on Zeplin, please open one. Then provide us with your
account email and we will invite you to the project.

The landing page should be coded as designed, and tested for all screen sizes. It should be
responsive, or at least degrade gracefully on mobile screens. Note that no mobile mockups
have been created, you’ll have to improvise.

You will also be provided with a JSON file, containing the 3-step questionnaire which should be
shown to the user when they click the “take the quiz” button in the top section.

This landing page should be a single-page application, meaning the quiz should open in the
same page. This is to avoid the drop-off when users get bored waiting for the next page to load.

The quiz questions should have four steps: one for each question, and one for the result step.

Each step should be shown full screen (no part of the landing page should be displayed to
distract the user), with white background and dark text. When the user answers one quiz
question, they should be taken to the next one immediately. After the final quiz question they
should be shown the results page.

The user should be able to go back to the previous questions. If they do, the previously
selected answer should be visible somehow. Users should also be able to change their
answers by simply selecting a new one, possibly triggering a rejection.
The quiz questions are fully described in the provided JSON file. The quiz should be fully
dynamic, allowing the existing JSON file to be replaced with a different one, or even with an
API.

You can find the json here:
[https://manual-case-study.herokuapp.com/questionnaires/972423.json](https://manual-case-study.herokuapp.com/questionnaires/972423.json)

- If the user selects as an answer an option that has isRejection === true, they should be
  shown the result “Unfortunately, we are unable to prescribe this medication for you. This
  is because finasteride can alter the PSA levels, which maybe used to monitor for cancer.
  You should discuss this further with your GP or specialist if you would still like this
  medication.”

- If the user reaches the end of the quiz without meeting any of the rejection conditions,
  they should be shown the result “Great news! We have the perfect treatment for your
  hair loss. Proceed to www.manual.co, and prepare to say hello to your new hair!”
  JSON

```json
 {
    "questions": [{
            "question": "Which image best matches your hair loss?",
            "type": "ChoiceType",
            "options": [{
                    "display": "<img alt=\"Temples\"
                    src = \"https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png\"
                    srcset = \"https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss%402x.png
                    2 x\ " />",
                    "value": "Temples",
                    "isRejection": false
                },
                {
                    "display": "<img alt=\"Temples & Crown\"
                    src = \"https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png\"
                    srcset = \"https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss%402
                    x.png 2 x\ "/>",
                    "value": "Temples & Crown",
                    "isRejection": false
                },
                {
                    "display": "<img alt=\"Patchy\"
                    src = \"https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png\"
                    srcset = \"https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss%402x.png
                    2 x\ "/>",
                    "value": "Patchy",
                    "isRejection": true
                },
                {
                    "display": "<img alt=\"Moderate\"
                    src = \"https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png\"
                    srcset = \"https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss%402x.pn
                    g 2 x\ " />",
                    "value": "Moderate",
                    "isRejection": false
                },
                {
                    "display": "<img alt=\"Extensive\"
                    src = \"https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png\"
                    srcset = \"https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss%402x.pn
                    g 2 x\ "/>",
                    "value": "Extensive",
                    "isRejection": true
                },
                {
                    "display": "<img alt=\"Complete\"
                    src = \"https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png\"
                    srcset = \"https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.pn
                    g 2 x\ " />",
                    "value": "Complete",
                    "isRejection": true
                }
            ]
        },
        {
            "question": "Have you ever been diagnosed with prostate cancer, or are you currently
            undergoing PSA / Prostate monitoring ? ",
            "type" : "ChoiceType",
            "options": [{
                    "display": "Yes",
                    "value": true,
                    "isRejection": true
                },
                {
                    "display": "No",
                    "value": false,
                    "isRejection": false
                }
            ]
        },
        {
            "question": "Have you ever been diagnosed with breast cancer or noticed any changes in
            your breast tissue such as lumps,
            pain, nipple discharge or swelling ? ",
            "type" : "ChoiceType",
            "options": [{
                    "display": "Yes",
                    "value": true,
                    "isRejection": true
                },
                {
                    "display": "No",
                    "value": false,
                    "isRejection": false
                }
            ]
        }
    ]
}
```

### Design Mockup

Please see detailed design on Zeplin: [https://zpl.io/bzA5Z0z](https://zpl.io/bzA5Z0z)
