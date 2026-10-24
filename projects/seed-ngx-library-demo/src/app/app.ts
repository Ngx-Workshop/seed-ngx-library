import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LibraryCard } from '@tmdjr/seed-ngx-library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LibraryCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <h1>seed-ngx-library</h1>
      <ngx-library-card heading="Library demo">
        <p>Replace this example with your library's public components and usage examples.</p>
      </ngx-library-card>
    </main>
  `,
})
export class App {}
