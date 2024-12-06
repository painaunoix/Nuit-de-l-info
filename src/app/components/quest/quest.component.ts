import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      width: '400px',
      height: '30%',
      position: { right: '0px', top: '630px' }, // Positionner la popup sur la droite de la fenêtre
      data: { title: "Quest Information", content: "Récolter 100 déchets pour sauver l'océan !" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  template: `
    <h1 mat-dialog-title>{{data.title}}</h1>
    <div mat-dialog-content>{{data.content}}</div>
    <div mat-dialog-actions>
      <button mat-button (click)="closeDialog()">Fermer</button>
    </div>
  `
})
export class DialogContentExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogContentExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
