//
//  Page2.swift
//  SwiftUI Pod
//
//  Created by Cameron Warner on 3/3/25.
//

import SwiftUI

struct Session3: View {
    var body: some View {
        VStack {
            Image("download (3)")
                .resizable() // Needed to resize Images
                .aspectRatio(contentMode: .fit)   //Fits Image to the Device's screen
//                .scaledToFit() //Scaled to Fit page
//                .scaledToFill() //Scaled to Fill the page
//                .edgesIgnoringSafeArea(.all)
//                .clipShape(RoundedRectangle(cornerRadius: 70.0))  //Clips Image into shape
//                .clipShape(Ellipse()) // Clips Image into shape
//                .clipShape(Capsule()) // Clips Image into shape

                    
                
            
            Image(systemName:"star")
                .font(.title)
                .foregroundStyle(.blue)
            
           Image("download (1)")
                .resizable()
                .frame(width: 200, height: 200)
                .clipShape(Circle())
            
            Image("Pannel_3")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .clipShape(RoundedRectangle(cornerRadius: 70.0 ))
                Divider()
            
            Text("Neon")
                .font(.headline)
                .foregroundColor(.red)
                .padding()
            Text("Meh")
                .padding()
                .border(Color.green, width: 2)
                .cornerRadius(10)
            Text("Shadow")
                .padding()
                .background(Color.white)
                .shadow(color: .gray, radius: 3, x: 0, y: 5)
            Image(systemName: "pencil.tip")
                .font(.title)
        }// End of VStack
        .padding()
    }
}

#Preview {
    Session3()
}


// https://www.swiftyplace.com/blog/mastering-swiftui-image-view
