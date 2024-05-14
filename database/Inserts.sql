INSERT INTO USERS
	VALUES 
		(1, 'Jardel', 'Rodrigues', 'jardel@gmail.com', 'jardelgalvao', '123'),
        (2, 'Thalia', 'Rodrigues', 'thalia@gmail.com', 'thaliagalvao', '321');

INSERT INTO CATEGORIES
	VALUES
		(1, 1, 'FINANCES', 'For my finances'),
        (1, 2, 'HOUSE', 'Hor house organization');
    
INSERT INTO SUB_CATEGORIES
	VALUES
		(1, 1, 1, 'Variable', 'Variable costs'),
        (1, 2, 1, 'Fixed', 'Fixed costs');
        
INSERT INTO ITEMS
	VALUES
		(1, 1, 1, 1, 'Dog food', null, '2024-05-01', null, '2024-05-01', null, 99.90),
        (2, 1, 1, 1, 'Padlock', 'Padlock for the kennel', '2024-05-10', null, '2024-05-10', null, 99.90),
        (1, 2, 1, 1, 'New Faucet', 'New faucet for kitchen', '2024-04-05', null, '2024-04-05', null, 158.40),
        (2, 2, 1, 1, 'Rug', 'New red rug', '2024-04-15', null, '2024-04-15', null, 199.25);
        
SELECT * FROM ITEMS