// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

/// @title ChessBaserContract
/// @author Maukingdomctrl
/// @notice Owner can add notes; anyone can read notes

contract ChessBaserContract {
    address public owner;  // Changed from private to public

    struct ChessNote {
        string title;
        uint256 date;  // Unix timestamp
        string content;
    }

    ChessNote[] private chessNotes;

    event ChessNoteAdded(string title, uint256 date, string content);

    constructor() {
        owner = msg.sender;

        chessNotes.push(ChessNote({
            title: "Family Note",
            date: 1731369600,
            content: "Hello Base, this is Maukingdomctrl. Hello Chessbase family. Family, we are launching an attack on west & interogate granpa Feco. Andrew turned 25. He is giving 1 BTC to all members. Paula is ruling the North side. All disputes resolved. Mama Lovely changed her name and also removed mama from her name. All kids are fine. Mau love."
        }));
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    /// @notice Add a new chess note (only owner)
    function addChessNote(string calldata _title, uint256 _date, string calldata _content) external onlyOwner {
        chessNotes.push(ChessNote({
            title: _title,
            date: _date,
            content: _content
        }));

        emit ChessNoteAdded(_title, _date, _content);
    }

    /// @notice Get total number of chess notes (anyone)
    function getChessNotesCount() external view returns (uint256) {
        return chessNotes.length;
    }

    /// @notice Get a chess note by index (anyone)
    function getChessNote(uint256 index) external view returns (string memory, uint256, string memory) {
        require(index < chessNotes.length, "Index out of bounds");
        ChessNote memory note = chessNotes[index];
        return (note.title, note.date, note.content);
    }
}