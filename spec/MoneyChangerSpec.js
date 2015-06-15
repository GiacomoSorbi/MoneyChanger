describe("Valid input tests", function() {
  var inputs=["4", "85", "197p", "2p", "1.87", "£1.23", "£2", "£10", "£1.87p", "£1p", "001.41p", "4.235p", "£1.257422457p"];
  var inputsParsed=[4, 85, 197, 2, 187, 123, 200, 1000, 187, 100, 141, 424, 126];
  var outputs=[ { '2p': 2 },
    { '50p': 1, '20p': 1, '10p': 1, '5p': 1 },
    { '£1': 1, '50p': 1, '20p': 2, '5p': 1, '2p': 1 },
    { '2p': 1 },
    { '£1': 1, '50p': 1, '20p': 1, '10p': 1, '5p': 1, '2p': 1 },
    { '£1': 1, '20p': 1, '2p': 1, '1p': 1 },
    { '£2': 1 },
    { '£2': 5 },
    { '£1': 1, '50p': 1, '20p': 1, '10p': 1, '5p': 1, '2p': 1 },
    { '£1': 1 },
    { '£1': 1, '20p': 2, '1p': 1 },
    { '£2': 2, '20p': 1, '2p': 2 },
    { '£1': 1, '20p': 1, '5p': 1, '1p': 1 } ];

	function tryout(array, index) {
		it("Testing for "+array[index], function() {
		  expect(changeMoney(array[index])).toEqual(outputs[index]);
		});
	}
 
  for (var i=0;i<inputs.length;i++)
	  tryout(inputs, i);

  for (var i=0;i<inputsParsed.length;i++)
	  tryout(inputsParsed, i);
});

describe("Invalid input tests", function() {
  var inputs=["", "1x", "£1x.0p", "£p", "-1.87", "£1,23", "0£2", "p"];
  var inputsParsed=[0, 0, 0, 0, 0, 0, 0, 0,];
  var outputs=[ null, null, null, null, null, null, null, null];

	function tryout(array, index) {
		it("Testing for "+array[index], function() {
		  expect(changeMoney(array[index])).toBe(outputs[index]);
		});
	}

  for (var i=0;i<inputs.length;i++)
	  tryout(inputs, i);

  for (var i=0;i<inputsParsed.length;i++)
	  tryout(inputsParsed, i);
});

