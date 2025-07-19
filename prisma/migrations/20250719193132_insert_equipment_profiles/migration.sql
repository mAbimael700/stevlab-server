INSERT INTO "equipment_profiles" ("id", "communication_profile", "name", "active", "communication_type") VALUES

-- Equipos HL7
(1, 'HL7-1', 'Controlab', true, 'TcpInbound'),
(2, 'HL7-1', 'Wondfo Finecare Plus', true, 'TcpInbound'),
(3, 'HL7-1', 'Dymind DH36', true, 'TcpInbound'),
(4, 'HL7-1', 'Mindray BS-120', true, 'TcpInbound'),
(5, 'HL7-1', 'Sweblab Lumi', true, 'TcpInbound'),
(6, 'HL7-1', 'Mindray BC-20s', true, 'TcpOutbound'),

(7, 'FJD-1', 'Fujifilm Drimchem NX600', true, 'TcpInbound'),

-- Equipos XML
(8, 'XML-1', 'Swelab plus', true, 'Serial'),
(9, 'XML-1', 'Swelab alfa', true, 'Serial'),

-- Equipos Vitros350/FJT1
(10, 'Vitros350-1', 'Vitros 350', true, 'Serial'),

-- Equipos A15
(11, 'A15-1', 'BioSystems A15', true, 'Serial'),
(12, 'A15-1', 'BioSystems A25', true, 'Serial'),

-- Equipos CM200
(13, 'CM200-1', 'Wiener Lab Group CM200', true, 'Serial'),

-- Equipos SPRU120
(14, 'SPRU120-1', 'Spinreact U-120', true, 'Serial');